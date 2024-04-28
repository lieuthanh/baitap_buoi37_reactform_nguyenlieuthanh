import React, { Component } from 'react'
import TableSinhVien from './tablesinhvien'
import ThemSinhVien from './formthemsv'


export default class Home extends Component {
  render() {
    return (
      <>
        <ThemSinhVien />
        <TableSinhVien />
      </>
    )
  }
}
