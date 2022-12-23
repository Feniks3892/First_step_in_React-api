import React from 'react';
import AddUser from './AddUser';
import { IoTrashBinSharp, IoPencilSharp } from 'react-icons/io5';

 class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editForm: false
    }
  }
    user = this.props.user
    render() {
      return (
        <div className='user'>
            <IoTrashBinSharp onClick={() => this.props.onDelete(this.user.id)} className='delete-icon' />
            <IoPencilSharp onClick={() => {
              this.setState({
                editForm: !this.state.editForm
              })
            }} className='edit-icon' />
            <h3>{this.user.first_name} {this.user.last_name}</h3>
            <img src={this.user.avatar} alt='avatar' />
            <p>{this.user.email}</p>
            <b>{this.user.isHappy ? 'Soglasen' : 'Ne soglasen'}</b>

            {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit} />}
        </div>
      )
    }
 }

 export default User