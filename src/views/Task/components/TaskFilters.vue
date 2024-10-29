<script setup lang="ts">
import { IconElement1, IconSetting4, IconSort } from '@/components/Icons';
import { SearchInput } from '@/components/SearchInput';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
</script>
<template>
  <div class="mt-6 flex justify-between gap-6">
    <SearchInput
      class="flex-1"
      placeholder="Search Task"
    />

    <Drawer>
      <DrawerTrigger as-child>
        <Button
          class="size-[52px] md:hidden"
          variant="outline"
          size="icon"
        >
          <IconSetting4 />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filter</DrawerTitle>
        </DrawerHeader>
        <div class="flex flex-col gap-6 p-6 sm:flex-row">
          <Select
            :model-value="$route.query.category as string"
            @update:model-value="
              $router.replace({ query: { ...$route.query, category: $event } })
            "
          >
            <SelectTrigger :with-arrow="false">
              <IconElement1 />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="frontend">Frontend</SelectItem>
                <SelectItem value="backend">Backend</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="others">Others</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            class="w-40"
            :model-value="$route.query.sort as string"
            @update:model-value="
              $router.replace({ query: { ...$route.query, sort: $event } })
            "
          >
            <SelectTrigger :with-arrow="false">
              <IconSort />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="deadline">Deadline</SelectItem>
                <SelectItem value="priority">Priority</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="old">Old</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <DrawerFooter>
          <DrawerClose>
            <Button
              class="w-full"
              variant="secondary"
              >Close</Button
            >
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
    <div class="hidden gap-6 md:flex">
      <Select
        :model-value="$route.query.category as string"
        @update:model-value="
          $router.replace({ query: { ...$route.query, category: $event } })
        "
      >
        <SelectTrigger :with-arrow="false">
          <IconElement1 />
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="frontend">Frontend</SelectItem>
            <SelectItem value="backend">Backend</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="others">Others</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        class="w-40"
        :model-value="$route.query.sort as string"
        @update:model-value="
          $router.replace({ query: { ...$route.query, sort: $event } })
        "
      >
        <SelectTrigger :with-arrow="false">
          <IconSort />
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="deadline">Deadline</SelectItem>
            <SelectItem value="priority">Priority</SelectItem>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="old">Old</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  </div>
</template>
