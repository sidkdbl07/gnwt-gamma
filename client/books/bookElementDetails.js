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
  'defaultToday': function() {
    if(typeof this.default_today != 'undefined' && this.default_today) {
      return 'checked';
    }else{
      return '';
    }
  },
  'isDate': function() {
    return (this.type == 'date');
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
});

Template.bookElementDetails.events({
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
