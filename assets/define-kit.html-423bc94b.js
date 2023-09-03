import{_ as n,o as s,c as a,a as e}from"./app-a2f90cb4.js";const t={},p=e(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p><code>Revili</code> 是一款脚手架的模块化方案，可以通过 <code>defineKit</code> 生成一个插件实例，对脚手架进行能力增强。</p><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> join <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;node:path&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineKit<span class="token punctuation">,</span> useServerSocket <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@spider/sili-shared/node&#39;</span>

<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> DefineKitReturn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@spider/sili-shared/node&#39;</span>

<span class="token keyword">const</span> demoKit<span class="token operator">:</span> DefineKitReturn <span class="token operator">=</span> <span class="token function">defineKit</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 插件名称</span>
  name<span class="token operator">:</span> <span class="token string">&#39;sili-plugin-demo&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// 注册可以和 GUI 通信的服务</span>
  <span class="token function-variable function">registerService</span><span class="token operator">:</span> server <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 注册 command 命令</span>
  <span class="token function-variable function">registerCommand</span><span class="token operator">:</span> program <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    program<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;你触发了 spider test 命令！&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> demoKit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function i(c,l){return s(),a("div",null,o)}const u=n(t,[["render",i],["__file","define-kit.html.vue"]]);export{u as default};
