      $(".txtb").on("keyup",function(e){ //.on đính kèm nhiều sự kiện vào .txtb
        //13  means enter button
        if(e.keyCode == 13 && $(".txtb").val() != "") //.val() lấy giá trị của form input
        {
          var task = $("<div class='task'></div>").text($(".txtb").val()); //.text() lấy hoặc thay đổi hoặc gán nội dung cho thành phần
          var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){ //.fadeOut ẩn thành phần với hiệu ứng mờ dần
              p.remove(); //.remove loại bỏ tất cả các thành phần
            });
          });

          var check = $("<i class='fas fa-check'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
              $(".comp").append(p); //.append chèn, di chuyển thành phần này sang thành phần khác
              p.fadeIn(); //.fadeIn hiển thị thành phần với hiệu ứng rõ dần
            });
            $(this).remove();
          });

          task.append(del,check);
          $(".notcomp").append(task);
            //to clear the input
          $(".txtb").val("");
        }
      });