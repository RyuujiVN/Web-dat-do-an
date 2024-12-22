
// Sidebar
const siderItems = document.querySelectorAll(".sider-item");
if (siderItems.length > 0) {
    siderItems.forEach(item => {
        item.addEventListener("click", () => {
            const itemActive = document.querySelector(".sider-item.active");
            itemActive.classList.remove("active");
            item.classList.add("active");
        })
    })
}
// End Sidebar

// Upload Image Preview
const uploadImage = document.querySelector("[upload-image]");

if (uploadImage) {
    const uploadInput = uploadImage.querySelector("[upload]");
    const uploadImagePreview = uploadImage.querySelector("[upload-image-preview]");

    uploadInput.addEventListener("change", (e) => {
        const [image] = e.target.files;
        const urlImage = URL.createObjectURL(image);

        uploadImagePreview.src = urlImage;
    })
}
// End Upload Image Preview

// Button Change Status
const formChangeStatus = document.querySelector("[form-change-status]");

if (formChangeStatus) {
    const buttonChangeStatus = document.querySelectorAll("[button-change-status]");
    const action = formChangeStatus.getAttribute("path");

    buttonChangeStatus.forEach(button => {
        button.addEventListener("click", () => {
            const id = button.getAttribute("data-id");
            const status = button.getAttribute("data-status");

            const newStatus = status === "active" ? "inactive" : "active";


            formChangeStatus.action = `${action}/${id}-${newStatus}?_method=PATCH`;
            formChangeStatus.submit();
        })
    })
}
// End Button Change Status

// Button delete
const formDelete = document.querySelector("[form-delete]");
if (formDelete) {
    const buttonDelete = document.querySelectorAll("[button-delete]");
    const action = formDelete.getAttribute("path");

    buttonDelete.forEach(button => {
        button.addEventListener("click", () => {
            const isConfirm = confirm("Bạn có chắc muốn xóa tài khoản này?");
            if (isConfirm) {
                const id = button.getAttribute("data-id");

                formDelete.action = `${action}/${id}?_method=DELETE`;
                formDelete.submit();
            }
        })
    })
}
// Button delete
