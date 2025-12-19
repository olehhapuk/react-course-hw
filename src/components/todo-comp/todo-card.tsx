import type { Todo } from "@/types/todo";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Ellipsis, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

interface TodoCardProps {
  todo: Todo;
  onDelete: (id: string) => void;
  onUpdateStatus: (id: string, newStatus: boolean) => void;
}

export default function TodoCard({
  todo,
  onDelete,
  onUpdateStatus,
}: TodoCardProps) {
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    useState(false);

  function onDeleteClick() {
    onDelete(todo.id);
    setIsDeleteConfirmationOpen(false);
  }

  return (
    <Card>
      <CardContent className="flex items-center gap-2 ">
        <Checkbox
          checked={todo.isCompleted}
          onCheckedChange={(value) => onUpdateStatus(todo.id, Boolean(value))}
        />

        <p className="grow">{todo.text}</p>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button type="button" variant="outline" size="icon-sm">
              <Ellipsis />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Pencil />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              variant="destructive"
              onClick={() => setIsDeleteConfirmationOpen(true)}
            >
              <Trash2 />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <AlertDialog
          open={isDeleteConfirmationOpen}
          onOpenChange={setIsDeleteConfirmationOpen}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you shure you want to delete this todo?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action is permanent
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <Button
                type="button"
                variant="destructive"
                onClick={onDeleteClick}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardContent>
    </Card>
  );
}
