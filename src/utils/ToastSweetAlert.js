import Swal from 'sweetalert2';

export const Toast = Swal.mixin({
    // toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: false,
    background: 'black',
    color: 'orange',
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

export const ToastToken = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: false,
    background: 'black',
    color: 'white',
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

export const SwalForResources = Swal.mixin({
    background: '#1f2937',
    color: '#fff',
    customClass: {
        title: 'text-4xl text-orange-500',
    },
});

