var FileField = Ember.View.extend({
  tagName: 'input',
  attributeBindings: ['type'],
  type: 'file',

  name: null,
  contentType: null,
  encodedData: null,

  change: function(e) {
    var self = this,
        file = e.target.files[0],
        contentType = file.type,
        name = file.name,
        reader = new FileReader();

    reader.onload = function(onloadEvent) {
      self.setProperties({
        name: name,
        contentType: contentType,
        encodedData: onloadEvent.target.result.replace(/data:.*;base64,/, "")
      });
    };

    // TODO: look into filesize limits
    reader.readAsDataURL(file);
  }
});

export default FileField;
