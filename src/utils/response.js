const commonResponse = {
    successCode: '00',
    successMessage: 'Success',
    defaultErrorCode: 'XX',
    defaultErrorMessage: 'Something went wrong',
    dataExist: 'Data already exists',
    dataNotExist: 'Data not exist',
    isRequire: 'Can\'t add, there is missing property',
    isOfficeDay: 'Pelayanan KTP hanya hari Senin-Jum\'at',
    isOfficeHour: 'Pelayanan KTP hanya pada Pukul 08:00 s.d 14:00 WIB',
    isGenderValid: 'Jenis kelamin harus Perempuan atau Laki-laki',
    isLengthNikValid: 'Panjang karakter KTP tidak lebih dan kurang dari 16 digit',
}

const Response = () => {
    const successMessage = (code, msg = commonResponse.successMessage, data) => {
        return {
            code: code,
            message: msg,
            data: data
        }
    }

    const errorMessage = (code, msg = commonResponse.defaultErrorMessage) => {
        return {
            code: code,
            message: msg,
            data: null
        }
    }

    return {
        successMessage, errorMessage
    }
}

module.exports = { commonResponse, Response }
