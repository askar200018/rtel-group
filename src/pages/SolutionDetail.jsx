import { Typography } from '@mui/material';

const SolutionDetail = () => {
  return (
    <div>
      <div
        className="flex flex-col items-center justify-center w-full h-screen bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://www.hytera.ru/upload/resize_cache/webp/iblock/76d/76db6bbf5dfba0d15776dbaa0e8ce5a1.webp")',
        }}>
        <Typography variant="h3" className="text-white" sx={{ marginBottom: '16px' }}>
          Smart tower
        </Typography>
        <a
          className="py-2 px-4 text-white bg-green-600 rounded-xl cursor-pointer"
          href="/rtel-group/files/test.pdf"
          download
          target="_blank"
          rel="noreferrer">
          Скачать презентацию
        </a>
      </div>
    </div>
  );
};

export default SolutionDetail;
