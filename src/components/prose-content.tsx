export function ProseContent({ contentHtml }: { contentHtml: string }) {
  return (
    <article
      className="prose prose-lg dark:prose-invert mx-auto max-w-prose px-5 py-8"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  )
}
