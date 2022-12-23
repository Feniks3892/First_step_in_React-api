import React from 'react';

 class AddUser extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            bio: "",
            age: 1,
            isHappy: false
        }
    }
    render() {
      return (
        <form ref={(el) => this.myForm = el}>
            <input placeholder='Name' onChange={(e) => this.setState({ first_name: e.target.value })} />
            <input placeholder='LastName' onChange={(e) => this.setState({ last_name: e.target.value })} />
            <input placeholder='email'onChange={(e) => this.setState({ email: e.target.value })} />
            <input placeholder='avatar' onChange={(e) => this.setState({ avatar: e.target.value })} />
            <label htmlFor='isHappy' >Soglasen</label>
            <input type="checkbox" id='isHappy' onChange={(e) => this.setState({ isHappy: e.target.checked })} />
            <button type='button' onClick={() => {
              this.myForm.reset()
              this.userAdd = {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                avatar: this.state.avatar,
                isHappy: this.state.isHappy,
              }
              if (this.props.user) 
                this.userAdd.id = this.props.user.id
              this.props.onAdd(this.userAdd)
              }
            }>Oke</button>
        </form>
      )
    }
 }

 export default AddUser