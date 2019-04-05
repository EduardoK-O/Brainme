const map = new Map()
map.set("auth/user-not-found","El usuario no se encuentra registrado")

export default function(errorCode){
    var mensaje = map.get(errorCode)

    if(!mensaje){
        return 'Ha ocurrido un error mientras se realizaba esta acción. Si el error persiste, por favor comuníquese a soporte técnico'
    }else{
        return mensaje
    }
}