Template.bookElementDetails.onRendered(function() {
  this.autorun(function(){
    Tracker.afterFlush(function(){
      $(".datepicker").pickadate({
        format: 'dd/mm/yyyy',
        selectMonths: true,
        selectYears: 100
      });
    });
  });
});

Template.bookElementDetails.helpers({
  'allowMultiple': function() {
    if(typeof this.allow_multiple != 'undefined' && this.allow_multiple) {
      return 'checked';
    }else{
      return '';
    }
  },
  'applyRange': function() {
    if(typeof this.apply_range != 'undefined' && this.apply_range) {
      return 'checked';
    }else{
      return '';
    }
  },
  'choices': function() {
    return this.choices.sort(function(a,b) {
      if(a.order > b.order) return 1;
      if(a.order < b.order) return -1;
    });
  },
  'defaultToday': function() {
    if(typeof this.default_today != 'undefined' && this.default_today) {
      return 'checked';
    }else{
      return '';
    }
  },
  'elementId': function() {
    return Template.parentData(1)._id;
  },
  'isChoice': function() {
    return (this.type == 'choice');
  },
  'isDate': function() {
    return (this.type == 'date');
  },
  'isDefaultChoice': function() {
    if(this.default == true) {
      return 'checked';
    }else{
      return '';
    }
  },
  'isDefaultNone': function() {
    if(typeof this.default_value != 'undefined' || !this.default_value || this.default_value == "None") {
      return 'checked';
    }else{
      return '';
    }
  },
  'isDefaultNo': function() {
    if((typeof this.default_value != 'undefined' && this.default_value) && this.default_value == "No") {
      return 'checked';
    }else{
      return '';
    }
  },
  'isDefaultYes': function() {
    if((typeof this.default_value != 'undefined' && this.default_value) && this.default_value == "Yes") {
      return 'checked';
    }else{
      return '';
    }
  },
  'isNumeric': function() {
    return (this.type == 'numeric');
  },
  'isPhoto': function() {
    return (this.type == 'photo');
  },
  'isRequired': function() {
    if(typeof this.required != 'undefined' && this.required) {
      return 'checked';
    }else{
      return '';
    }
  },
  'isText': function() {
    return (this.type == 'text');
  },
  'isYesNo': function() {
    return (this.type == 'yesno');
  },
  'sortChoiceDownEnabled': function() {
    var element = BookElements.findOne({_id: Template.parentData(1)._id});
    if(this.order == (element.choices.length - 1)) return 'disabled';
    return '';
  },
  'sortChoiceUpEnabled': function() {
    if(this.order == 0) return 'disabled';
    return '';
  }
});

Template.bookElementDetails.events({
  'click .add-choice': function(event) {
    event.preventDefault();
    var elementID = $(event.target).attr('element_id');
    if(typeof elementID == 'undefined' || elementID == "") {
      $.publish('toast', ["Could not determine which element to add to", "Error", "error", 0]);
      return;
    }
    var element = BookElements.findOne({_id: elementID});
    var num_of_choices = element.choices.length;
    element.choices.push({name: 'Choice', order: num_of_choices, default: false});
    Meteor.call('editBookElement', element);
  },
  'click .choiceDelete': function(event) {
    event.preventDefault();
    var elementID = $(event.target).closest('div.choice-element').attr('element_id');
    var element = BookElements.findOne({_id: elementID});
    var choices = element.choices.sort(function(a,b) {
      if(parseInt(a.order)>parseInt(b.order)) return 1;
      return -1;
    });
    var currentOrder = parseInt($(event.target).closest('div.choice-element').attr('order'));
    var choiceRemoved = false;
    for(var i=0; i<choices.length; i++) {
      if(parseInt(choices[i].order) == currentOrder && choiceRemoved == false) {
        choices.splice(i,1);
        i--;
        choiceRemoved = true;
        continue;
      }
      if(choiceRemoved) { // we need to decrement all choice that occur after the splice
        choices[i].order = parseInt(choices[i].order) - 1;
      }
    }
    element.choices = choices;
    Meteor.call('editBookElement', element);
  },
  'click .delete-element': function(event) {
    event.preventDefault();
    var elementID = $(event.target).attr('element_id');
    if(typeof elementID == 'undefined' || elementID == "") {
      $.publish('toast', ["Could not determine which element to remove", "Error", "error", 0]);
      return;
    }
    Meteor.call('removeBookElement', elementID);
    $.publish('toast', ["Book element deleted", "Success", "success", 0]);
  },
  'click .sortChoiceDown': function(event) {
    event.preventDefault();
    var elementID = $(event.target).closest('div.choice-element').attr('element_id');
    var element = BookElements.findOne({_id: elementID});
    var choices = element.choices.sort(function(a,b) {
      if(parseInt(a.order)>parseInt(b.order)) return 1;
      return -1;
    });
    var currentOrder = parseInt($(event.target).closest('div.choice-element').attr('order'));
    if(currentOrder == (choices.length - 1))
      return; // you are already the last element
    for(var i=0; i<choices.length; i++) {
      if(parseInt(choices[i].order) == currentOrder) {
        choices[i].order = parseInt(choices[i].order) + 1;
        choices[i+1].order = parseInt(choices[i+1].order) - 1;
        break;
      }
    }
    element.choices = choices;
    Meteor.call('editBookElement', element);
  },
  'click .sortChoiceUp': function(event) {
    event.preventDefault();
    var elementID = $(event.target).closest('div.choice-element').attr('element_id');
    var element = BookElements.findOne({_id: elementID});
    var choices = element.choices.sort(function(a,b) {
      if(parseInt(a.order)>parseInt(b.order)) return 1;
      return -1;
    });
    var currentOrder = parseInt($(event.target).closest('div.choice-element').attr('order'));
    if(currentOrder == 0)
      return; // you are already the first element
    for(var i=0; i<choices.length; i++) {
      if(parseInt(choices[i].order) == currentOrder) {
        choices[i].order = parseInt(choices[i].order) - 1;
        choices[i-1].order = parseInt(choices[i-1].order) + 1;
        break;
      }
    }
    element.choices = choices;
    Meteor.call('editBookElement', element);
  },
  'click .save-element': function(event) {
    event.preventDefault();
    var elementID = $(event.target).attr('element_id');
    var elementType = $(event.target).attr('element_type');
    if(typeof elementID == 'undefined' || elementID == "") {
      $.publish('toast', ["Could not determine which element to save", "Error", "error", 0]);
      return;
    }
    if(typeof elementType == 'undefined' || elementType == "") {
      $.publish('toast', ["Could not determine which element type to save", "Error", "error", 0]);
      return;
    }
    var element = BookElements.findOne({_id: elementID});
    if(elementType == "choice") {
      element.text = $('#text_'+elementID).val();
      element.required = (($('#required_'+elementID).is(':checked'))?true:false);
      var choices = [];
      $('#choices_'+elementID).children('div.choice-element').each(function() {
        //console.log($($(this).find('input.choice-name')[0]).val());
        choices.push({name: $($(this).find('input.choice-name')[0]).val(),
                      order: $(this).attr('order'),
                      default: (($($(this).find('input.choice-default')[0]).is(':checked'))?true:false)
        });
      });
      element.choices = choices;
    }
    if(elementType == "date") {
      element.text = $('#text_'+elementID).val();
      element.default_value = $('#default_'+elementID).val();
      element.default_today = (($('#defaulttoday_'+elementID).is(':checked'))?true:false);
      element.apply_range = (($('#range_'+elementID).is(':checked'))?true:false);
      element.minimum_value = $('#min_'+elementID).val();
      element.maximum_value = $('#max_'+elementID).val();
      element.required = (($('#required_'+elementID).is(':checked'))?true:false);
    }
    if(elementType == "numeric") {
      element.text = $('#text_'+elementID).val();
      element.decimal_places = $('#decimal_'+elementID).val();
      element.default_value = $('#default_'+elementID).val();
      element.apply_range = (($('#range_'+elementID).is(':checked'))?true:false);
      element.minimum_value = $('#min_'+elementID).val();
      element.maximum_value = $('#max_'+elementID).val();
      element.required = (($('#required_'+elementID).is(':checked'))?true:false);
    }
    if(elementType == "photo") {
      element.text = $('#text_'+elementID).val();
      element.required = (($('#required_'+elementID).is(':checked'))?true:false);
      element.allow_multiple = (($('#allowmultiple_'+elementID).is(':checked'))?true:false);
    }
    if(elementType == "text") {
      element.text = $('#text_'+elementID).val();
      element.placeholder = $('#placeholder_'+elementID).val();
      element.required = (($('#required_'+elementID).is(':checked'))?true:false);
    }
    if(elementType == "yesno") {
      element.text = $('#text_'+elementID).val();
      element.required = (($('#required_'+elementID).is(':checked'))?true:false);
      element.default_value = (($('#defaultyes_'+elementID).is(':checked'))?'Yes': (($('#defaultno_'+elementID).is(':checked'))?'No':'None'));
    }
    Meteor.call('editBookElement', element);
    $.publish('toast', ["Book element saved", "Success", "success", 0]);
  }
});
