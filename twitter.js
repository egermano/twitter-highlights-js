/**
 * @author Bruno Germano
 */
function buildTweet (tweet){
    var from = document.createElement('div');
    var msg = document.createElement('div');
    var date = document.createElement('div');

    //from user
    from.className = 'from';
    from.innerHTML ="FROM @" + tweet.user.screen_name;

    //message
    msg.className = 'mensagem';
    msg.innerHTML =  tweet.text;

    //date from menssage
    var data = new Date(Date.parse(tweet.created_at)).toLocaleDateString();
    var hora = new Date(Date.parse(tweet.created_at)).toLocaleTimeString();
    var tweetDate = new Date(data + ' ' + hora);
    var today = new Date();

    var diff = (today.getTime()-tweetDate.getTime());
    var dataText = '';

    if(diff<(1000*60*60*24)){
        if(diff<(1000*60*60)){
            var minutos = Math.floor(diff/(1000*60))
            if(minutos <= 1)
                dataText = ' now';
            else{
                dataText = minutos.toString() + ' minutes ago'
            }
        }else{
            var horas = Math.floor(diff/(1000*60*60))
            dataText = horas.toString() + (horas==1?' hour ago':' hours ago');
        }
    }else{
        var dias = Math.floor(diff/(1000*60*60*24))
        if(dias==1){
            dataText = ' yestarday';
        }else{
            dataText = dias.toString() + ' days ago';
        }
    }
    date.className = 'data';
    date.innerHTML = dataText;

    var div = document.createElement('div');

    div.appendChild(from);
    div.appendChild(msg);
    div.appendChild(date);

    return div.innerHTML;
}