/*
 * :file description:
 * :name: /xueciya/components/NavBar/index.tsx
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-05 22:19:33
 * :last editor: 张德志
 * :date last edited: 2024-10-05 23:14:36
 */
import Image from "next/image";
export default function NavBar() {
  return (
    <div className="h-16 bg-blue-600 flex px-8 items-center">
      <div className="pr-6 flex items-center flex-1">
        <Image
          width={120}
          height={64}
          src="https://typingfun.cn/assets/img/daziya-logo.svg"
          alt=""
        />
        <span className="h-9 w-1 bg-yellow-300" />
        <h2>免费在线学词平台</h2>
      </div>
      <div className="111">2222</div>
    </div>
  );
}
