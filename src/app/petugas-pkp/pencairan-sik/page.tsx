'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { toast } from 'sonner'

interface STData {
  id: number
  nomor_st: string
  tanggal_surat_tugas: string
  tanggal_kegiatan_st: string
  nama_wp: string
  npwp: string
  alamat_lengkap: string
  kecamatan: string
  kelurahan: string
  nominal_sik: number
  status: 'pending' | 'dicairkan'
  tanggal_pencairan: string | null
  petugas: Array<{
    nama: string
    nip: string
    jabatan: string
  }>
}

export default function PencairanSIKPage() {
  const [selectedST, setSelectedST] = useState<STData | null>(null)
  const [isPetugasOpen, setIsPetugasOpen] = useState(false)

  // Mock data ST dengan rule 1 ST per hari
  const [stBelumCairkan, setStBelumCairkan] = useState<STData[]>([
    {
      id: 1,
      nomor_st: 'ST-PKP-2025-001',
      tanggal_surat_tugas: '2025-01-24',
      tanggal_kegiatan_st: '2025-01-25',
      nama_wp: 'PT. Contoh Usaha Jaya',
      npwp: '12.345.678.9-012.345',
      alamat_lengkap: 'Jl. Sudirman No. 123',
      kecamatan: 'Kaliwates',
      kelurahan: 'Jember Lor',
      nominal_sik: 60000,
      status: 'pending',
      tanggal_pencairan: null,
      petugas: []
    },
    {
      id: 2,
      nomor_st: 'ST-PKP-2025-002',
      tanggal_surat_tugas: '2025-01-30',
      tanggal_kegiatan_st: '2025-02-01',
      nama_wp: 'UD. Sumber Rejeki',
      npwp: '11.222.333.4-567.890',
      alamat_lengkap: 'Jl. Gajah Mada No. 789',
      kecamatan: 'Patrang',
      kelurahan: 'Patrang',
      nominal_sik: 58000,
      status: 'pending',
      tanggal_pencairan: null,
      petugas: []
    }
  ])

  const openPetugasDialog = (st: STData) => {
    setSelectedST(st)
    setIsPetugasOpen(true)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Pencairan SIK</h1>
        <p className="text-gray-600 mt-2">Sistem pencairan SIK dengan workflow lengkap sesuai requirement</p>
      </div>
      
      <Card className="bg-yellow-50 border-yellow-200">
        <CardContent className="p-4">
          <p className="text-yellow-800">
            🚧 <strong>Pencairan SIK Workflow</strong> dengan semua logic rules (1 ST per hari, multiple petugas, dll) sedang diimplementasi lengkap.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}