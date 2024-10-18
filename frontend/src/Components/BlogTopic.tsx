interface BlogTopicInput {
  topic: string;
}

export const BlogTopic = ({ topic }: BlogTopicInput) => {
  return (
    <div>
      <div className="text-slate-700 cursor-pointer text-sm hover:bg-slate-300 bg-slate-200 rounded-3xl px-3">
        {topic}
      </div>
    </div>
  );
};
