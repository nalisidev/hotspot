<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { Package } from '@/types'

//dummy
const packages: Package[] = [
  {
    duration: "2 hours",
    devices: 1,
    price: 100
  },
  {
    duration: "1 hour",
    devices: 2,
    price: 200
  }
]
</script>

<template>
  <div h-screen w-screen >
    <Tabs default-value="packages" w-full md:w="460px" md:mx-auto>
    <TabsList class="grid w-full grid-cols-2" rounded-sm>
      <TabsTrigger value="packages" >
        Packages
      </TabsTrigger>
      <TabsTrigger value="voucher">
        Voucher
      </TabsTrigger>
    </TabsList>
    <TabsContent value="packages">
      <div v-for="pkg in packages" my2 mx2>
        <Card>
        <CardHeader>
          <CardDescription flex gap-2 justify-between items-center>
            <p>{{ pkg.duration }} package • For {{ pkg.devices }} device(s)</p>
            <h2 font-bold text-lg>{{ pkg.price }} KSH</h2>
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button w-full>Buy Now</Button>
        </CardFooter>
      </Card>
      </div>
    </TabsContent>
    <TabsContent value="voucher">
      <Card mx-2>
        <CardHeader>
          <CardTitle>Enter Voucher</CardTitle>
          <CardDescription>
            Connect back to your internet using the voucher.
          </CardDescription>
        </CardHeader>
        <CardContent class="space-y-2">
          <div class="space-y-1">
            <Label for="current">Voucher</Label>
            <Input id="current" type="text" uppercase/>
          </div>
        </CardContent>
        <CardFooter>
          <Button w-full>Connect</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  </Tabs>
  </div>
</template>
