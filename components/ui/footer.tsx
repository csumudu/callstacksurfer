import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto container px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`py-8  ${border ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]" : ""}`}
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div className="-ml-12 -mb-6">
              <Logo height={50} />
            </div>
            <div className="text-sm text-gray-600">
              &copy; 2024 All rights reserved.
            </div>
          </div>

                
          
        </div>
      </div>

   
    </footer>
  );
}
