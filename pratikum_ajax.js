/**
 *AJAX 

 *AJAX = Asynchronous JavaScript and XML
 *AJAX atau Asynchronous Javascript Aand XML adalah teknik 
 *yang di gunakan untuk membuat 
 *website yang dinamis
 *artinya website mampu mengupdete dan menampilkan 
 *data baru dari server tanpa perlu melakukan reload.

 *pada pratikum ini , kita akan menggunakan AJAX Jquery
 */


// Fungsi AJAX Jquery untuk meload isi file

$(function () {
    $("#nama").load("text.txt");
});


$(function(){
    let url = "https://jsonplaceholder.typicode.com/photos";
    //mengambil buttom untuk fetch data
    $("#getPost").on("click",function(){
        $.ajax({
            url : url,
            type : 'GET',
            //jika Sukses
            success: function(data){
                let data_html = '';
                //looping data (Ambil satu persatu data)
                $.each(data,function(i,item){

                    data_html +=
                        '<br>' +
                        '<img src="' + item.thumbnailUrl + '" alt="">' +
                        '<br>' +
                        '<h1>' + item.id + '.' + item.title + '</h1>'
                });

                //memasukan hasil loop tadi ke div dengan id #data_hasil_dari_internet

                $("#data_hasil_dari_internet").html(data_html);

               
            },
            //jika Error

            error : function(error){
                //Tampilkan Console.log
                console.log(error);
            }

        })
    });
});
