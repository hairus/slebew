<?php

namespace App\Http\Controllers;

use App\Models\anggota_rombel;
use App\Models\rombongan_belajar;
use App\Models\token;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client;

class dapodikController extends Controller
{
    public function sim(Request $request)
    {
        $cek = token::count();
        if($cek >= 1 ){
            $hapus = token::first();
            $hapus->delete();


            $sim = token::create([
                "ip" => $request->ip,
                "npsn" => $request->npsn,
                "token" => $request->token
            ]);

            return $sim;
        }else{
            $sim = token::create([
                "ip" => $request->ip,
                "npsn" => $request->npsn,
                "token" => $request->token
            ]);

            return $sim;
        }

    }

    public function getdata()
    {
        $token = token::first();

//        $res = Http::withToken($token->token)->get('http://' . $token->ip . '/WebService/getRombonganBelajar?npsn=' . $token->npsn);
        $res = Http::withToken($token->token)->get('http://192.168.101.169:5774/WebService/getRombonganBelajar?npsn=20520022');

        // data pegambilan data rombel siswa //
        $entityBody = file_get_contents('php://temp');

        dd($res->getBody());

        $data = json_decode($res->body());
        for ($x = 0; $x < $data->results; $x++) {
            $jum_anggota_rombel = count($data->rows[$x]->anggota_rombel);
            $jum_pembelajaran = count($data->rows[$x]->pembelajaran);
            if (rombongan_belajar::where('rombongan_belajar_id', $data->rows[$x]->rombongan_belajar_id)->exists()) {
            } else {
                $sim = rombongan_belajar::create([
                    "rombongan_belajar_id" => $data->rows[$x]->rombongan_belajar_id,
                    "nama" => $data->rows[$x]->nama,
                    "tingkat_pendidikan_id" => $data->rows[$x]->tingkat_pendidikan_id,
                    "tingkat_pendidikan_id_str" => $data->rows[$x]->tingkat_pendidikan_id_str,
                    "semester_id" => $data->rows[$x]->semester_id,
                    "jenis_rombel" => $data->rows[$x]->jenis_rombel,
                    "jenis_rombel_str" => $data->rows[$x]->jenis_rombel_str,
                    "kurikulum_id" => $data->rows[$x]->kurikulum_id,
                    "kurikulum_id_str" => $data->rows[$x]->kurikulum_id_str,
                    "id_ruang" => $data->rows[$x]->id_ruang,
                    "id_ruang_str" => $data->rows[$x]->id_ruang_str,
                    "moving_class" => $data->rows[$x]->moving_class,
                    "ptk_id" => $data->rows[$x]->ptk_id,
                    "ptk_id_str" => $data->rows[$x]->ptk_id_str,
                    "jurusan_id" => $data->rows[$x]->jurusan_id,
                    "jurusan_id_str" => $data->rows[$x]->jurusan_id_str,
                ]);
                if ($data->rows[$x]->anggota_rombel) {
                    for ($y = 0; $y < $jum_anggota_rombel; $y++) {
                        if (anggota_rombel::where('peserta_didik_id', $data->rows[$x]->anggota_rombel[$y]->peserta_didik_id)->exists()) {
                        } else {
                            $sim->anggotas()->create([
                                "anggota_rombel_id" => $data->rows[$x]->anggota_rombel[$y]->anggota_rombel_id,
                                "peserta_didik_id" => $data->rows[$x]->anggota_rombel[$y]->peserta_didik_id,
                                "jenis_pendaftaran_id" => $data->rows[$x]->anggota_rombel[$y]->jenis_pendaftaran_id,
                                "jenis_pendaftaran_id_str" => $data->rows[$x]->anggota_rombel[$y]->jenis_pendaftaran_id_str,
                            ]);
                        }
                    }
                }
                if ($data->rows[$x]->pembelajaran) {
                    for ($z = 0; $z < $jum_pembelajaran; $z++) {
                        $sim->pembelajarans()->create([
                            "pembelajaran_id" => $data->rows[$x]->pembelajaran[$z]->pembelajaran_id,
                            "mata_pelajaran_id" => $data->rows[$x]->pembelajaran[$z]->mata_pelajaran_id,
                            "pembelajaran_id" => $data->rows[$x]->pembelajaran[$z]->pembelajaran_id,
                            "mata_pelajaran_id" => $data->rows[$x]->pembelajaran[$z]->mata_pelajaran_id,
                            "mata_pelajaran_id_str" => $data->rows[$x]->pembelajaran[$z]->mata_pelajaran_id_str,
                            "ptk_terdaftar_id" => $data->rows[$x]->pembelajaran[$z]->ptk_terdaftar_id,
                            "ptk_id" => $data->rows[$x]->pembelajaran[$z]->ptk_id,
                            "nama_mata_pelajaran" => $data->rows[$x]->pembelajaran[$z]->nama_mata_pelajaran,
                            "induk_pembelajaran_id" => $data->rows[$x]->pembelajaran[$z]->induk_pembelajaran_id,
                            "jam_mengajar_per_minggu" => $data->rows[$x]->pembelajaran[$z]->jam_mengajar_per_minggu,
                            "status_di_kurikulum" => $data->rows[$x]->pembelajaran[$z]->status_di_kurikulum,
                            "status_di_kurikulum_str" => $data->rows[$x]->pembelajaran[$z]->status_di_kurikulum_str,
                        ]);
                    }
                }
            }
        }
        // end data pengambilan data rombel siswa //



        //========== get peserta didik ===============//

        $pd = Http::withToken($token->token)->get('http://' . $token->ip . '/WebService/getPesertaDidik?npsn=' . $token->npsn . '');
        $data = json_decode($pd->getBody());
        for ($a = 0; $a < $data->results; $a++) {
            if (peserta_didik::where('peserta_didik_id', $data->rows[$a]->peserta_didik_id)->exists()) {
            } else {
                $pd = peserta_didik::create([
                    "peserta_didik_id" => $data->rows[$a]->peserta_didik_id,
                    "nama" => $data->rows[$a]->nama,
                    "nisn" => $data->rows[$a]->nisn,
                    "anggota_rombel_id" => $data->rows[$a]->anggota_rombel_id,
                    "rombongan_belajar_id" => $data->rows[$a]->rombongan_belajar_id,
                    "nama_rombel" => $data->rows[$a]->nama_rombel,
                ]);
            }
        }

        // ========= end get peserta didik ===========//

        // ========== get GTK =====================//
        $ptk = Http::withToken($token->token)->get('http://' . $token->ip . '/WebService/getGtk?npsn=' . $token->npsn . '');
        $data = json_decode($ptk->getBody());
        for ($a = 0; $a < $data->results; $a++) {
            if (ptk::where('ptk_id', $data->rows[$a]->ptk_id)->exists()) {
            } else {
                $pd = ptk::create([
                    "ptk_id" => $data->rows[$a]->ptk_id,
                    "nama" => $data->rows[$a]->nama,
                    "ptk_terdaftar_id" => $data->rows[$a]->ptk_terdaftar_id,
                    "jenis_ptk_id_str" => $data->rows[$a]->jenis_ptk_id_str,
                ]);
            }
        }
        // ========== end get GTK =================//
    }

    public function getDataToken()
    {
        $token = token::first();

        return response()->json($token);
    }

    public function delToken($id)
    {
        $del = token::find($id);
        $del->delete();

        return "suksess";
    }
}
