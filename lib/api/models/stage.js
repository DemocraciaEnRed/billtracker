const { Schema } = require('mongoose')

const schema = new Schema({
  bill: { type: Schema.Types.ObjectId, ref: 'Bill', required: true },
  title: { type: String, trim: true, maxlength: 127, required: true },
  summary: { type: String, trim: true, maxlength: 255 },
  published: { type: Boolean, default: false },
  identification: { type: String, trim: true, maxlength: 63 },
  authors: [{ type: Schema.Types.ObjectId, ref: 'Politician' }],
  stageDate: Date,
  text: String,
  trashedAt: Date
}, {
  timestamps: true
})

schema.options.toJSON =
schema.options.toObject = {
  getters: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id
    return ret
  }
}

schema.virtual('id').get(function () { return this._id })

schema.methods.trash = function () {
  this.trashedAt = new Date()
  return this.save()
}

module.exports = schema