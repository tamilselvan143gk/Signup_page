export const formMixins = {
    methods: {
       
        validateEmail() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.email)) {
                this.emailError = 'Invalid email address';
            } else {
                this.emailError = '';
            }
        },
        validatePassword() {
            const symbolRegex = /[^a-zA-Z0-9\s]/;
            const numberRegex = /[0-9]/;
            const capitalRegex = /[A-Z]/;

            if (this.password.length < 8) {
                this.passwordError = 'Password must be at least 8 characters long';
            } else if (!symbolRegex.test(this.password)) {
                this.passwordError = 'Password must contain at least one symbol';
            } else if (!numberRegex.test(this.password)) {
                this.passwordError = 'Password must contain at least one number';
            } else if (!capitalRegex.test(this.password)) {
                this.passwordError = 'Password must contain at least one capital letter';
            } else {
                this.passwordError = '';
            }
        },
        formInvalid() {
            return this.emailError || this.passwordError;
        }
    },

}