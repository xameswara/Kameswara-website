from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, DateTimeField
from wtforms.validators import DataRequired

class TaskForm(FlaskForm):
    title = StringField('Judul', validators=[DataRequired()])
    description = TextAreaField('Deskripsi')
    due_date = DateTimeField('Tanggal Jatuh Tempo', format='%Y-%m-%d %H:%M', validators=[DataRequired()])