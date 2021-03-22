import React, { Component } from 'react';
import * as actions from '../../../store/actions/';
import axios from '../../../axios-blogs';
import { connect } from 'react-redux';
import classes from './BlogContent.module.css';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';



export class BlogContent extends Component {
  state = {
    postForm: {
      title: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Title',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      content: {
        elementType: 'textarea',
        elementConfig: {
          type: 'textarea',
          placeholder: 'content',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
  };

  submitHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.postForm) {
      formData[formElementIdentifier] = this.state.postForm[
        formElementIdentifier
      ].value;
    }
    const post = {
      name: 'hayden',
      date: Date(),
      postData: formData
    }
    // console.log('made it here:\n' + JSON.stringify(post, null, 4));

    axios.post('/posts.json', post)
      .then(response => console.log(response))
      .catch(error => console.log(error))

  };

  checkValidity(value, rules) {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  }
  inputChangedHandler = (event, inputIdentifier) => {
    const updatedPostForm = {
      ...this.state.postForm,
    };
    const updatedFormElement = {
      ...updatedPostForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedPostForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedPostForm) {
      formIsValid = updatedPostForm[inputIdentifier].valid && formIsValid;
    }
    console.log('formIsValid:\t' + formIsValid);
    this.setState({ postForm: updatedPostForm, formIsValid: formIsValid });
  };


  render() {
    const formElementsArray = [];
    for (let key in this.state.postForm) {
      formElementsArray.push({
        id: key,
        config: this.state.postForm[key],
      });
    }
    return (
      <div className={classes.wrapper}>
        <form className={classes.paper} method="get" onSubmit={this.submitHandler}>
          {formElementsArray.map((formElement) => (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              invalid={!formElement.config.valid}
              shouldValidate={formElement.config.validation}
              touched={formElement.config.touched}
              changed={(event) => this.inputChangedHandler(event, formElement.id)}
            />
          ))}
          <Button btnType='Success' disabled={!this.state.formIsValid}>
            Post
        </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onArticlePost: (postData) => dispatch(actions.postArticle(postData))
  }
}

export default connect(null, mapDispatchToProps)(withErrorHandler(BlogContent, axios));