const mixinFormulario = {
    data() {
        return {
            cargandoFormulario: false,
            error: '',
            valido:false,
            email:'',
            password:'',
            repetirPassword:'',
            reglasNombre:[
                (nombre)=> nombre.length > 0 || 'Debe ingresar un nombre valido',
                (nombre)=> nombre.length <= 40 || 'Debe ingresar un nombre menor a 40 caracteres'
            ],
            reglasEmail:[
                (email)=> this.validarEmail(email) || 'Ingrese un correo valido'
            ],
            reglasPassword: [
                (password) => password.length >= 8 || 'Debe ingresar una contraseña mayor o igual que 8 caracteres'
            ],
            reglasRepetirPassword:[
                (repetirPassword) => this.password === repetirPassword || 'Las contraseñas deben coincidir'
            ]
        }
    },
    methods:{
        validarEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
    }    
}

export {
    mixinFormulario
}