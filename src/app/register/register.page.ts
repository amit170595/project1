import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
declare var jQuery;

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private platform: Platform, private router: Router) {
    this.platform.ready().then(() => {
      jQuery(document).ready(function () {


        /***************************************************************************************/


        (function (jQuery) {
          jQuery.fn.clickToggle = function (func1, func2) {
            var funcs = [func1, func2];
            this.data('toggleclicked', 0);
            this.click(function () {
              var data = jQuery(this).data();
              var tc = data.toggleclicked;
              jQuery.proxy(funcs[tc], this)();
              data.toggleclicked = (tc + 1) % 2;
            });
            return this;
          };
        }(jQuery));



        /***************************************************************************************/


        jQuery('.vbdAnchor').clickToggle(function () {
          jQuery('.vdMatr').css("display", "block");
        },
          function () {
            jQuery('.vdMatr').css("display", "none");
          });



        jQuery('.topNavAnchor').click(function () {
          jQuery(".slideNav").css('display', 'block');
          jQuery(".slideNav").delay(100).animate({ left: '0' });
        });



        jQuery('.closeMainNav').click(function () {
          jQuery(".slideNav").css('display', 'none');
          jQuery(".slideNav").delay(100).animate({ left: '-100%' });

        });
        jQuery('.slideNavList li').click(function () {
          jQuery(".slideNav").css('display', 'none');
          jQuery(".slideNav").delay(100).animate({ left: '-100%' });

        });


        jQuery('.mainCatList li').click(function () {
          jQuery(this).siblings().removeClass("active");
          jQuery(this).addClass("active");
          jQuery('.mcatmatr').css("display", "none");
          var id = jQuery(this).attr("id");
          jQuery('#' + id + 'Matr').css("display", "block");
        });







        jQuery(window).scroll(function () {
          if (jQuery(window).scrollTop() >= 100) {
            jQuery('.hHdr').addClass('sticky-header');
          }
          else { jQuery('.hHdr').removeClass('sticky-header'); }
          if (jQuery(this).scrollTop() > 100) {
            jQuery('.scrollup').fadeIn();
          }
          else { jQuery('.scrollup').fadeOut(); }
        });
        jQuery('.scrollup').click(function () { jQuery("html, body").animate({ scrollTop: 0 }, 600); return false; });





      });
    });
  }

      ngOnInit() { }
    }
  

