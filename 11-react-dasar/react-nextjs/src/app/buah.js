export default function Buah(){
    let buah = ["jeruk","mangga", "pepaya", "alpukat"]
    
    return (
        <div>
            <h1>Buah</h1>
            {buah.map((item,index) => (
                <div key={index}>
                    {item}
                </div>
            ))}
        </div>
    )
}