import { NextResponse } from 'next/server';

type UploadRequest = {
  files: {
    fileName: string;
    contentType: string;
    fileSize: number;
  }[];
};

export async function POST(req: Request) {
  const body = (await req.json()) as UploadRequest;

  const jobId = 'job_abc123';

  const uploads = body.files.map((file) => ({
    uploadUrl: `https://example.r2.dev/uploads/${jobId}/${file.fileName}`,
    objectKey: `uploads/user_id/${jobId}/${file.fileName}`,
  }));

  return NextResponse.json({ jobId, uploads });
}
