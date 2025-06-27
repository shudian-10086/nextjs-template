'use client';

import { useEffect } from 'react';

/**
 * 在开发环境下初始化 Stagewise 工具栏的组件。
 * 这个组件不会渲染任何可见的 UI，只在客户端执行初始化逻辑。
 */
export function StagewiseInitializer() {
  useEffect(() => {
    // 确保只在开发环境中执行
    // 使用一个全局标志来防止由React StrictMode引起的热重载导致的重复初始化
    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined' && !(window as any).__stagewiseInitialized) {
      // 动态导入 toolbar 以避免在生产构建中包含它
      import('@stagewise/toolbar').then(({ initToolbar }) => {
        console.log('Stagewise toolbar initialized.');
        // 定义工具栏配置，未来可以扩展插件
        const stagewiseConfig = {
          plugins: [],
        };
        // 初始化工具栏
        initToolbar(stagewiseConfig);
        // 设置标志位，防止重复初始化
        (window as any).__stagewiseInitialized = true;
      });
    }
  }, []); // 空依赖数组确保 effect 只运行一次

  return null; // 此组件不渲染任何内容
} 