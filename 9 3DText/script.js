import * as THREE from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
function initText(font) {
  const text = new TextGeometry("Hello Three.js", {
    font,
    size: 0.5,
    //字体高度
    depth: 0.2,
    // 曲线分段数，值越大，曲线越平滑
    curveSegments: 5,
    // 启用倒角/斜切
    /**
     * 当 bevelEnabled: true 时，通常需要配合以下几个子参数一起使用
     * bevelThickness	倒角的深度	决定从文字正面往里“抠”进去多深。
     * bevelSize	倒角向外的扩展距离	决定倒角让文字变得多“胖”
     * bevelSegments	倒角的细分层数	数值越高，边缘越圆润；数值为 1 则是一个斜平切面。
     */
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    // bevelSegments: 4,
    bevelOffset: 0,
    bevelSegments: 4,
  });
  return text;
}
export { initText };
