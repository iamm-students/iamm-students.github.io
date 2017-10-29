var s=location.pathname;
s = s.substr(s.lastIndexOf("/") + 1, s.indexOf(".") - 1);
$("#" + s).addClass("active");
$("#" + s).parent(".dropdown-menu").parent(".dropdown").addClass("active");
$(".navHeaderCollapse a").each(function() { if (this.parentNode.id != "") {this.href="/" + this.parentNode.id + ".html"}});

$(document).ready(function() {  
                    $('div>span#openstat2323431').parent().remove();
                    $('script')[0].remove;
                    $('iframe[src^="/abnl/"]').each(function(){$(this).remove();});
                    $('script[src^="/abnl/"]').each(function(){$(this).remove();});
                    $adv = $('table[style="z-index:10000;"]');
                    if ($adv.length)
                      $adv[0].remove();
                    $('script[src^="http://ad.smaclick"]').each(function(){$(this).remove();});
                  });