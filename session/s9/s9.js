document.getElementsByClassName

function show(id){
    let ans = document.getElementById('ans' + id)

    for(let i = 1; i<=3; i++){
        let ans = document.getElementById('ans' + i)
        ans.style.display = "none"
    }

    ans.style.display = "block"
}





