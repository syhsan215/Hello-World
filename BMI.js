
var send=document.querySelector('.button');
send.addEventListener('click',calculate,false);

var data = JSON.parse(localStorage.getItem('listData'))||[];

function calculate(e){
    var hei = parseInt(document.getElementById('heiId').value);
    var wei =parseInt(document.getElementById('weiId').value);
    var bmi = wei / ((hei/100)*(hei/100));
    var total = { height: hei,
                  weight: wei,
                  bmi: bmi };
    
   
    data.push(total);
    updateData(data);

    localStorage.setItem('listData',JSON.stringify(data));

}


/*======放進html裡面======*/

var content=document.querySelector('.contentClass');
function updateData(items){
 
    var str='<h1>BMI紀錄</h1>'+'';
    for(var i=0;i<items.length;i++){
        
            if(items[i].bmi<24 && 18.5<items[i].bmi){
                str+='<table>';
                str+='<tr>';
                str+='<td class="box-idea">理想</td>';
                str+='<td>BMI'+items[i].bmi.toFixed(1)+'</td>';
                str+='<td>height'+items[i].height+'</td>';
                str+='<td>weight'+items[i].weight+'</td>';
                str+='</tr>';
                str+='</table>';
            }
            else if(items[i].bmi<18.5){
                str+='<table>';
                str+='<tr>';
                str+='<td class="box-light">過輕</td>';
                str+='<td>BMI'+items[i].bmi.toFixed(1)+'</td>';
                str+='<td>height'+items[i].height+'</td>';
                str+='<td>weight'+items[i].weight+'</td>';
                str+='</tr>';
                str+='</table>';
            }
            else if(24<=items[i].bmi && items[i].bmi<27){
                str+='<table>';
                str+='<tr>';
                str+='<td class="box-heavy">過重</td>';
                str+='<td>BMI'+items[i].bmi.toFixed(1)+'</td>';
                str+='<td>height'+items[i].height+'</td>';
                str+='<td>weight'+items[i].weight+'</td>';
                str+='</tr>';
                str+='</table>';
            }
            else if(27<=items[i].bmi && items[i].bmi<30){
                str+='<table>';
                str+='<tr>';
                str+='<td class="box-heavy1">輕度肥胖</td>';
                str+='<td>BMI'+items[i].bmi.toFixed(1)+'</td>';
                str+='<td>height'+items[i].height+'</td>';
                str+='<td>weight'+items[i].weight+'</td>';
                str+='</tr>';
                str+='</table>';
            }
            else if(30<=items[i].bmi && items[i].bmi<35){
                str+='<table>';
                str+='<tr>';
                str+='<td class="box-heavy2">中度肥胖</td>';
                str+='<td>BMI'+items[i].bmi.toFixed(1)+'</td>';
                str+='<td>height'+items[i].height+'</td>';
                str+='<td>weight'+items[i].weight+'</td>';
                str+='</tr>';
                str+='</table>';
            }
            else if(35<=items[i].bmi){
                str+='<table>';
                str+='<tr>';
                str+='<td class="box-heavy3">重度肥胖</td>';
                str+='<td>BMI'+items[i].bmi.toFixed(1)+'</td>';
                str+='<td>height'+items[i].height+'</td>';
                str+='<td>weight'+items[i].weight+'</td>';
                str+='</tr>';
                str+='</table>';
            }
         
    }
    console.log(str);
    content.innerHTML=str;
} 
updateData(data);

