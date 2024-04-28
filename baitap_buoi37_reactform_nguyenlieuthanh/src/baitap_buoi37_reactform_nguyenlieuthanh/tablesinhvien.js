import React, { Component } from 'react';
import {connect} from "react-redux";

class TableSinhVien extends Component {

  renderSinhVien = () => {
    const {mangSinhVien} = this.props;
    return mangSinhVien?.map((sinhvien,index) => {
      return (
      <tr key={index}>
          <td>{sinhvien.maSV}</td>
          <td>{sinhvien.hoTen}</td>
          <td>{sinhvien.soDienThoai}</td>
          <td>{sinhvien.email}</td>
      </tr>
      )
    })

  }

  render() {
    console.log(this.props.mangSinhVien);
    return (
      <div className="container">
          <table className="table">
            <thead>
              <tr className="bg-dark text-white">
                <th>Mã SV</th>
                <th>Họ Tên</th>
                <th>Số Điện Thoại</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {this.renderSinhVien()}
            </tbody>
          </table>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
    mangSinhVien: state.userReducer.mangSinhVien,
  }
}

export default connect(mapStateToProps, null)(TableSinhVien);