import { GetStaticProps, NextPage } from 'next';
import path from 'path';
import fs from 'fs-extra';
import Link from 'next/link'

export const getStaticProps: GetStaticProps = async () => {
  const targetDir = path.join(process.cwd(), 'pages', 'post');
  const dirs = await fs.readdir(targetDir);
  const paths = [];
  for (const slug of dirs) {
    paths.push({ path: slug });
  }
  paths.sort();
  return { props: { path: paths } };
};
type PostName = {
  path: string;
};
type Props = {
  path: PostName[];
};
const IndexPage: NextPage<Props> = (props: Props)=> {
  return (
    <>
      {props.path.map(e => <Link key={e.path} href={`/post/${e.path.replace(/\.tsx/, '')}`}>
        <a><h2>{e.path.replace(/\.tsx/, '')}</h2></a>
      </Link>)}
    </>
  );
}

export default IndexPage;
