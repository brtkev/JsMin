

export default function handler(req, res){
    const stats = [
        {
            "title" : "Usuarios activos", "count" : 300, "icon" : { "src" : "https://dummyimage.com/40x40/0000/fff.png&text=logo", "alt" : "logo" }
        },{
            "title" : "Descargas", "count" : 300, "icon" : { "src" : "https://dummyimage.com/40x40/0000/fff.png&text=logo", "alt" : "logo" }
        },{
            "title" : "transacciones", "count" : 1000, "icon" : { "src" : "https://dummyimage.com/40x40/0000/fff.png&text=logo", "alt" : "logo" }
        }
    ]

    res.status(200).json(stats);
}