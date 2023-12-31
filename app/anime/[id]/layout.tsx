export default function AnimeLayout({
  children,
} : {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="py-10 px-[10%]">
        {children}
      </div>
    </>
  )
}