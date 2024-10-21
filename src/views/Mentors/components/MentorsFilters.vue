<script setup lang="ts">
import { IconElement1, IconSort } from '@/components/Icons';
import { SearchInput } from '@/components/SearchInput';
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
    <div class="flex gap-6">
      <Select>
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
      <Select class="w-40">
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
