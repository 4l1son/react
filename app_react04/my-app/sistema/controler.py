from flask import Flask, render_template,jsonify,request

from login import validate
from model import login_model
app = Flask(__name__)


@app.route('/')
def home():
    return render_template('login.html')
@app.route('/cadastro')
def second():
    return render_template('cadastro.html')

@app.route('/login', methods=['POST'])
def login_cadastrado():
    return validate()



if __name__ == '__main__':
    app.run(port=5000,host='localhost',debug=True)