const button = document.querySelector('#button');

name = prompt('Enter your name: ', 'Player');
document.getElementById('name').textContent = name;

array1 = [
    ".//clubs.png",
    ".//jack_of_clubs.png",
    ".//queen_of_clubs.png",
    ".//king_of_clubs.png",
    ".//clubs.png",
    ".//6_of_clubs.png",
    ".//7_of_clubs.png",
    ".//8_of_clubs.png",
    ".//9_of_clubs.png",
    ".//10_of_clubs.png",
    ".//ace_of_clubs.png"
]

array2 = [
    ".//hearts.png",
    ".//jack_of_hearts.png",
    ".//queen_of_hearts.png",
    ".//king_of_hearts.png",
    ".//hearts.png",
    ".//6_of_hearts.png",
    ".//7_of_hearts.png",
    ".//8_of_hearts.png",
    ".//9_of_hearts.png",
    ".//10_of_hearts.png",
    ".//ace_of_hearts.png"
]
raund = 0;
document.getElementById('img1').src = array1[0];
document.getElementById('img2').src = array2[0];

button.addEventListener('click',function()
{
    if(document.getElementById('button').textContent != "Reload")
    {
        while(true)
        {
            var numb1 = Math.floor(Math.random() * array1.length);
            if(numb1 != 0 && numb1 != 4)
                break;
        }
        while(true)
        {
            var numb2 = Math.floor(Math.random() * array2.length);
            if(numb2 != 0 && numb2 != 4)
                break;
        }
        var score1 = Number(document.getElementById('pScore').textContent);
        var score2 = Number(document.getElementById('pScore1').textContent);
        
        document.getElementById('img1').src = array1[numb1];
        document.getElementById('img2').src = array2[numb2];

        score1 += numb1 + 1;
        score2 += numb2 + 1;
        
        document.getElementById('pScore').textContent = score1;
        document.getElementById('pScore1').textContent = score2;
        
        raund++;

        if(raund >= 3)
        {

            if(score1 > score2)
            {
                document.getElementById('pAnswer').textContent = 'Winner: ' + name;
                document.getElementById('button').textContent = "Reload";
            }

            else if(score1 < score2)
            {
                document.getElementById('pAnswer').textContent = 'Winner: Computer';
                document.getElementById('button').textContent = "Reload";
            }
            
            else if(score1 == score2)
            {
                document.getElementById('pAnswer').textContent = 'Winner: Draw';
				document.getElementById('button').textContent = "Reload";
            }
        }
        
    }
    else
    {
        document.getElementById('button').textContent = "Generate";
        document.getElementById('pScore').textContent = 0;
        document.getElementById('pScore1').textContent = 0;
        document.getElementById('img1').src = array1[0];
        document.getElementById('img2').src = array2[0];
        raund = 0;
        document.getElementById('pAnswer').textContent = 'Winner: (In round)';
    }
});
