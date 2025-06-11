import React, { useEffect, useRef } from "react";

const TypingEffect = () => {
  // 引用DOM元素
  const typingRef = useRef(null);

  // 自定义配置参数
  const config = {
    prefix: "",
    skills: ["前端小白"],
    delay: 2,
    step: 1,
    maxRandomChars: 5,
    typingSpeed: 75,
    colors: [
      "rgb(110,64,170)",
      "rgb(150,61,179)",
      "rgb(191,60,175)",
      "rgb(228,65,157)",
      "rgb(254,75,131)",
      "rgb(255,94,99)",
      "rgb(255,120,71)",
      "rgb(251,150,51)",
      "rgb(226,183,47)",
      "rgb(198,214,60)",
      "rgb(175,240,91)",
      "rgb(127,246,88)",
      "rgb(82,246,103)",
      "rgb(48,239,130)",
      "rgb(29,223,163)",
      "rgb(26,199,194)",
      "rgb(35,171,216)",
      "rgb(54,140,225)",
      "rgb(76,110,219)",
      "rgb(96,84,200)",
    ],
  };

  // 随机选择颜色
  const getRandomColor = () => {
    return config.colors[Math.floor(Math.random() * config.colors.length)];
  };

  // 生成随机字符
  const generateRandomChar = () => {
    return String.fromCharCode(94 * Math.random() + 33);
  };

  // 创建随机字符片段
  const createRandomChars = (count) => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const span = document.createElement("span");
      span.textContent = generateRandomChar();
      span.style.color = getRandomColor();
      fragment.appendChild(span);
    }
    return fragment;
  };

  // 打字效果逻辑
  useEffect(() => {
    const element = typingRef.current;
    if (!element) return;

    let state = {
      text: "",
      prefixPosition: -config.maxRandomChars,
      skillIndex: 0,
      skillPosition: 0,
      direction: "forward",
      delay: config.delay,
      step: config.step,
    };

    const typingEffect = () => {
      const currentSkill = config.skills[state.skillIndex];

      if (state.step) {
        state.step--;
      } else {
        state.step = config.step;

        if (state.prefixPosition < config.prefix.length) {
          if (state.prefixPosition >= 0) {
            state.text += config.prefix[state.prefixPosition];
          }
          state.prefixPosition++;
        } else if (state.direction === "forward") {
          if (state.skillPosition < currentSkill.length) {
            state.text += currentSkill[state.skillPosition];
            state.skillPosition++;
          } else if (state.delay) {
            state.delay--;
          } else {
            state.direction = "backward";
            state.delay = config.delay;
          }
        } else if (state.skillPosition > 0) {
          state.text = state.text.slice(0, -1);
          state.skillPosition--;
        } else {
          state.skillIndex = (state.skillIndex + 1) % config.skills.length;
          state.direction = "forward";
        }
      }

      // 更新文本内容
      element.textContent = state.text;

      // 添加随机字符
      const randomCharsCount =
        state.prefixPosition < config.prefix.length
          ? Math.min(config.maxRandomChars, config.maxRandomChars + state.prefixPosition)
          : Math.min(config.maxRandomChars, currentSkill.length - state.skillPosition);

      element.appendChild(createRandomChars(randomCharsCount));

      // 设置下一次更新
      setTimeout(typingEffect, config.typingSpeed);
    };

    // 启动打字效果
    typingEffect();

    // 组件卸载时的清理函数
    return () => {
      // 这里可以添加清理逻辑，例如清除定时器
    };
  }, []);

  return <div ref={typingRef} />;
};

export default TypingEffect;
