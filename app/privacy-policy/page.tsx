import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen py-16 px-4 bg-slate-50">
        <div className="nyt-container max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
            隐私政策
          </h1>
          <p className="text-slate-600 leading-relaxed">
            本隐私政策描述了 MiniGameHub（"网站"、"我们"、"我们的"）在您访问和使用 minigamehub.com 时如何收集、使用和披露您的个人信息。
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
              我们收集的信息
            </h2>
            <p className="text-slate-600 leading-relaxed">
              当您访问网站时，我们会自动收集某些关于您设备的信息，包括您的网络浏览器、IP 地址、时区以及设备上安装的某些 Cookie。此外，当您浏览网站时，我们会收集有关您查看的各个网页或游戏、哪些网站或搜索词将您引荐到网站以及您如何与网站互动的信息。我们将此自动收集的信息称为"设备信息"。
            </p>
            <p className="text-slate-600 leading-relaxed">
              我们使用以下技术收集设备信息：
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>"Cookie"是放置在您的设备或计算机上的数据文件，通常包含一个匿名唯一标识符。有关 Cookie 以及如何禁用 Cookie 的更多信息，请访问 <a href="http://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">http://www.allaboutcookies.org</a>。</li>
              <li>"日志文件"跟踪网站上发生的行为，并收集数据，包括您的 IP 地址、浏览器类型、互联网服务提供商、引用/退出页面和日期/时间戳。</li>
              <li>"网络信标"、"标签"和"像素"是用于记录您如何浏览网站的电子文件。</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
              我们如何使用您的个人信息
            </h2>
            <p className="text-slate-600 leading-relaxed">
              我们使用收集到的设备信息来帮助我们筛选潜在的风险和欺诈（特别是您的 IP 地址），以及更广泛地改进和优化我们的网站（例如，通过生成关于客户如何浏览和互动网站的分析，以及评估我们的营销和广告活动的成功）。
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
              共享您的个人信息
            </h2>
            <p className="text-slate-600 leading-relaxed">
              我们不会将您的个人信息出售、交易或以其他方式转让给外部方。这不包括协助我们运营网站、开展业务或为您提供服务的受信任第三方，只要这些方同意对这些信息保密。
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
              您的权利
            </h2>
            <p className="text-slate-600 leading-relaxed">
              如果您是欧洲居民，您有权访问我们持有的关于您的个人信息，并要求更正、更新或删除您的个人信息。如果您想行使此权利，请通过以下联系信息与我们联系。
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
              数据保留
            </h2>
            <p className="text-slate-600 leading-relaxed">
              当您访问网站时，我们将保留您的设备信息，除非您要求我们删除此信息。
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
              变更
            </h2>
            <p className="text-slate-600 leading-relaxed">
              我们可能会不时更新本隐私政策，以反映我们做法的变化或出于其他运营、法律或监管原因。我们鼓励您定期查看本页面以获取最新信息。
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
              联系我们
            </h2>
            <p className="text-slate-600 leading-relaxed">
              有关我们的隐私做法的更多信息，如果您有任何疑问，或想提出投诉，请通过电子邮件联系我们：[您的邮箱地址，例如 support@minigamehub.com]。
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
} 