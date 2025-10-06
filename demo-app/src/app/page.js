export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Ubah Olahraga Jadi Seru dengan{" "}
              <span className="text-accent">FitQuest</span> 💪🔥
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Dapatkan pengalaman fitness yang menyenangkan dengan sistem challenge, XP, dan badge.
              Mulai perjalanan fitness kamu sekarang!
            </p>
            <div className="space-x-4">
              <a href="/register" className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-2 text-sm font-medium text-accent-foreground shadow transition-colors hover:bg-accent/90">
                Mulai Gratis
              </a>
              <a href="/login" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent/10">
                Login
              </a>
            </div>
          </div>
        </section>

        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold">Challenge Harian</h3>
                  <p className="text-sm text-muted-foreground">
                    Ikuti challenge harian dan dapatkan XP untuk naik level
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold">Earn XP & Badge</h3>
                  <p className="text-sm text-muted-foreground">
                    Kumpulkan XP dan badge sebagai bukti pencapaianmu
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold">Track Progress</h3>
                  <p className="text-sm text-muted-foreground">
                    Pantau perkembanganmu dengan mudah dan menyenangkan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto max-w-[58rem] space-y-12">
            <h2 className="font-bold text-2xl leading-[1.1] sm:text-3xl text-center">
              Testimoni
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border bg-card p-6">
                <p className="text-sm leading-loose text-muted-foreground">
                  "Dulu males olahraga, sekarang jadi ketagihan karena ada poin dan level."
                </p>
                <p className="mt-2 font-semibold">- Andi, 25th</p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <p className="text-sm leading-loose text-muted-foreground">
                  "Serasa main game, tapi hasilnya badan lebih sehat."
                </p>
                <p className="mt-2 font-semibold">- Sari, 28th</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built by FitQuest Team
            </p>
          </div>
          <div className="flex gap-4">
            <a href="/about" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </a>
            <a href="/faq" className="text-sm text-muted-foreground hover:text-foreground">
              FAQ
            </a>
            <a href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
