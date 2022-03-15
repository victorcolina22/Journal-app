

export const fileUpload = async (file) => {
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dqqsaods4/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        const response = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });
        const cloudResp = await response.json();
        return cloudResp.secure_url;
    } catch (error) {
        throw error
    }
}