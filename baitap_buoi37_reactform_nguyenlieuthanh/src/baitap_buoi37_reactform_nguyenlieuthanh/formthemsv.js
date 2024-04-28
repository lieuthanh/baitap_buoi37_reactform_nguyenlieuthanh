import React, { Component } from "react";
import { connect } from "react-redux";

class FormThemSV extends Component {
  state = {
    values: {
      maSV: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
    errors: {
      maSV: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
    valid: false,
  };

  handleOnChange = (event) => {
    // lấy giá trị người dùng nhập vào
    let formInput = event.target;
    let { name, value,pattern,type } = formInput;

    let errorMessage = "";

    // kiểm tra rỗng
    if(value.trim() === ''){ 
      errorMessage = name + ' Không được bỏ trống !';
    }

    // kiểm tra email
    if(type === 'email'){
      const regex = new RegExp(pattern);
      if(!regex.test(value)){
        errorMessage = name + ' không đúng định dạng';
      }
    }
    if(name === 'soDienThoai'){
      const regex = new RegExp(pattern);
      if(!regex.test(value)){
        errorMessage = name + ' không đúng định dạng';
      }
    }



    let values = {...this.state.values, [name]: value}; // cập nhật giá trị values cho state
    let errors = {...this.state.errors, [name]: errorMessage}; // cập nhật errors cho state

    this.setState(
      {
        ...this.state,
        values: values,
        errors: errors,
      },
      () => {
        console.log(this.state);
        this.checkValid();
      }
    );
  };

  handleSubmit = (event) => {
    event.preventDefault(); // cản sự kiện submit của browser
    this.props.themSinhVien(this.state.values);
  };

  checkValid = () => {
    let valid = true;
    for (let key in this.state.errors ){
      if(this.state.errors[key] !== '' || this.state.values[key] === '')
      {
        valid = false;
      }
    }
  
      this.setState({
        ...this.state,
        valid: valid,
      })
      
  }


  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header bg-dark text-white">
            <h3>Thông Tin Sinh Viên</h3>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="form-group col-md-6">
                  <span>Mã SV</span>
                  <input
                    className="form-control"
                    name="maSV"
                    value={this.state.values.maSV}
                    onChange={this.handleOnChange}
                  />
                  <p className="text-danger">
                      {this.state.errors.maSV}
                  </p>
                </div>
                <div className="form-group col-md-6">
                  <span>Họ Tên</span>
                  <input
                    className="form-control"
                    name="hoTen"
                    value={this.state.values.hoTen}
                    onChange={this.handleOnChange}
                  />
                  <p className="text-danger">
                      {this.state.errors.hoTen}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <span>Số Điện Thoại</span>
                  <input
                  type="number"
                  pattern="^(0|[1-9][0-9]*)$"
                    className="form-control"
                    name="soDienThoai"
                    value={this.state.values.soDienThoai}
                    onChange={this.handleOnChange}
                  />
                  <p className="text-danger">
                      {this.state.errors.soDienThoai}
                  </p>
                </div>
                <div className="form-group col-md-6">
                  <span>Email</span>
                  <input
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                    className="form-control"
                    type="email"
                    name="email"
                    value={this.state.values.email}
                    onChange={this.handleOnChange}
                  />
                  <p className="text-danger">
                      {this.state.errors.email}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-12">
                    {this.state.valid? <button className="btn btn-success" type="submit">Thêm sinh viên</button> : <button className="btn btn-success" disabled type="submit">Thêm sinh viên</button>}                  
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sinhvien) => {
      const action = {
        type: "THEM_SINH_VIEN",
        sinhvien,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(FormThemSV);
