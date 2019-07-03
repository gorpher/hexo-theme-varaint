
function pagingHelper(options) {
  var options = options || {};
  var total = options.total || this.page.total || 1;
  var current = options.current || this.page.current || 0;
  var base = options.base || this.page.base || '';
  var format = options.format || this.config.pagination_dir + '/%d/';
  var self = this;

  function link(i) {
    return self.url_for(i === 1 ? base : base + format.replace('%d', i));
  }
  var pa = '';
  if(current!=1){
      pa+='<div class="icon-up" style="display: inline-block;margin-right:50px;"><a href="' + link(current - 1) + '#wrapper" target="_self"><i class="iconfont icon-next"></i></a></div>'
  }
  if(current < total){
    pa +='<div style="display: inline-block;"><a href="' + link(current + 1) + '#wrapper" target="_self"><i class="iconfont icon-next"></i></a></div>'
  }
  pa += ' </div>';
  return pa;
}

hexo.extend.helper.register('paging', pagingHelper);
