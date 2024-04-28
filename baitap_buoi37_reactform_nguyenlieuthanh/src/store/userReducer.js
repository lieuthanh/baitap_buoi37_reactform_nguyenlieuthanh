
const initialState = {
    mangSinhVien: [{maSV: 1, hoTen: "nguyen van a", soDienThoai: "0909119992", email: "abc@gmail.com"}]
};

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case 'THEM_SINH_VIEN': {
            const mangSVThemMoi = [...state.mangSinhVien, action.sinhvien];
            state.mangSinhVien = mangSVThemMoi;
            return {...state};
        }
        default:
        return {...state};
    }
};

export default userReducer;