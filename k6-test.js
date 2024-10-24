import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 10, // jumlah virtual users
  duration: '30s', // durasi pengujian
};

export default function () {
  let res = http.get('http://localhost:3000/api/data');
  check(res, { 'status was 200': (r) => r.status === 200 });
  sleep(1);
}
