import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import { FaCheck } from 'react-icons/fa';
import { HiOutlineSignalSlash } from 'react-icons/hi2';

function Date(props) {
  return (
    <>
      <Card className=' pb-0 bg-blue-gray-900'>
        <CardBody className='text-center -my-3'>
          <Typography variant='h4' color='white'>
            {props.name}
          </Typography>
        </CardBody>
        <CardHeader
          floated={false}
          className='mb-4 grid h-32 place-items-center text-center'>
          <Typography variant='h1' color='blue-gray'>
            {props.value}
          </Typography>
          <Typography variant='h4' className='-mt-3' color='blue-gray'>
            {props.satuan}
          </Typography>
          <Typography className='-mt-2' color='blue-gray'>
            {props.time}
          </Typography>
        </CardHeader>

        <CardFooter className='mt-4 flex justify-center gap-7 pt-2 bg-blue-gray-50 rounded-b-lg'>
          <div className='flex justify-between gap-16 -mb-3'>
            <FaCheck
              className={`h-8 w-8 ${
                props.value === '' ? 'text-gray-300' : 'text-green-500'
              }`}
            />
            <HiOutlineSignalSlash
              className={`h-8 w-8 ${
                props.value !== '' ? 'text-gray-300' : 'text-red-500'
              }`}
            />
          </div>
        </CardFooter>
      </Card>
    </>
  );
}

export default Date;
