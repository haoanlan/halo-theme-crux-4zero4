import * as tocbot from "tocbot";
export default () => ({
  // 生成目录
  generateToc(content_id: string, toc_container_class: string, toc_class: string) {
    // 获取内容元素
    const content = document.getElementById(content_id);
    // 获取内容中的所有标题元素
    const titles = content?.querySelectorAll("h1, h2, h3, h4");
    // 如果没有标题元素，则移除目录容器并返回
    if (!titles || titles.length === 0) {
      const tocContainer = document.querySelector("." + toc_container_class);
      tocContainer?.remove();
      return;
    }
// 初始化tocbot插件
    tocbot.init({
      // toc选择器，指定要生成目录的元素
      tocSelector: "." + toc_class,
      // 内容选择器，指定要生成目录的内容
      contentSelector: "#" + content_id,
      // 标题选择器，指定要生成目录的标题
      headingSelector: "h1, h2, h3, h4",
      // 额外的列表类，用于自定义目录样式
      extraListClasses: "space-y-1 dark:border-slate-500",
      // 额外的链接类，用于自定义目录链接样式
      extraLinkClasses:
        "group flex items-center justify-between rounded py-1 px-1.5 transition-all hover:bg-gray-100 text-sm opacity-80 dark:hover:bg-slate-700 dark:text-slate-50",
      // 活动链接类，用于指定当前活动的链接
      activeLinkClass: "is-active-link",
      // 折叠深度，指定目录的折叠级别
      collapseDepth: 6,
      // 标题偏移量，指定目录标题的偏移量
      headingsOffset: 100,
      // 平滑滚动，指定是否启用平滑滚动
      scrollSmooth: true,
      // 平滑滚动偏移量，指定平滑滚动的偏移量
      scrollSmoothOffset: -120,
    });
  },

  // this function copy from https://github.com/halo-dev/theme-earth/blob/main/src/main.ts
});
